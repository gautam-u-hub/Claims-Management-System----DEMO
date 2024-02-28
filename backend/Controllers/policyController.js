const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const crypto = require("crypto");
const Policy = require("../models/policyModel.js");
const User = require("../models/userModel.js");

// Create Policy -- Admin

exports.createPolicy = catchAsyncErrors(async (req, res, next) => {
    const policy = await Policy.create(req.body);

    res.status(200).json({
        success: true,
        policy
    });
});

// Get all policies

exports.getAllPolicies = catchAsyncErrors(async (req, res, next) => {
    const policies = await Policy.find({});

    res.status(200).json({
        success: true,
        policies
    });
});

// Get a single policy by ID

exports.getPolicyById = catchAsyncErrors(async (req, res, next) => {
    const policy = await Policy.findById(req.params.id);

    if (!policy) {
        return next(new ErrorHandler('Policy not found', 404));
    }

    res.status(200).json({
        success: true,
        policy
    });
});

// Update a policy by ID -- Admin

exports.updatePolicyById = catchAsyncErrors(async (req, res, next) => {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true 
    });

    if (!policy) {
        return next(new ErrorHandler('Policy not found', 404));
    }

    res.status(200).json({
        success: true,
        policy
    });
});

// Delete a policy by ID -- Admin

exports.deletePolicyById = catchAsyncErrors(async (req, res, next) => {
    const policy = await Policy.findByIdAndDelete(req.params.id);

    if (!policy) {
        return next(new ErrorHandler('Policy not found', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Policy deleted successfully'
    });
});

exports.assignPolicyToUser = catchAsyncErrors(async (req, res, next) => {
    const { userEmail } = req.body;
    const policyId = req.params.id;

    let user = await User.findOne({ email: userEmail });
    const policy = await Policy.findById(policyId);

    if (!user) {
        return next(new ErrorHandler('User not found', 404));
    }

    if (!policy) {
        return next(new ErrorHandler('Policy not found', 404));
    }

    if (user.policies.some(policy => policy._id.toString() === policyId)) {
        return next(new ErrorHandler('User already has this policy', 400));
    }

    if (!user.policies) {
        user.policies = [];
    }

    const { sumAssured } = policy;

    user.policies.push({ _id: policy._id, leftAmount: sumAssured });

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: 'Policy assigned to user successfully',
        user
    });
});

