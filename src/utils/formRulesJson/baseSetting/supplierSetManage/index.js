import { phone, email } from "../../validator";

export default {
  name: [{ required: true, message: "请输入供应商名称", trigger: "blur" }],
  contact: [{ required: true, message: "请输入联系人", trigger: "blur" }],
  organizationCode: [
    { required: true, message: "请输入组织机构代码", trigger: "blur" }
  ],
  telephone: [
    { required: true, message: "请输入联系电话", trigger: "blur" },
    { validator: phone, trigger: "blur" }
  ],
  email: [
    { required: true, message: "请输入EMAIL", trigger: "blur" },
    { validator: email, trigger: "blur" }
  ],
  address: [{ required: true, message: "请输入地址", trigger: "blur" }]
};
