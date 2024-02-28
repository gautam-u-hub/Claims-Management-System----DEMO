const express = require("express");

const {
    createPolicy, getAllPolicies, getPolicyById, updatePolicyById, deletePolicyById, assignPolicyToUser
} = require("../Controllers/policyController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/policy").post(isAuthenticatedUser, authorizeRoles("admin"), createPolicy);
router.route("/policies").get(getAllPolicies);
router.route("/policy/:id").get(getPolicyById);
router.route("/policy/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updatePolicyById);
router.route("/policy/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deletePolicyById);
router.route("/assign-policy/:id").post(isAuthenticatedUser,authorizeRoles("admin"),assignPolicyToUser);

module.exports=router;