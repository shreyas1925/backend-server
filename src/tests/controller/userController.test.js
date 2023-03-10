const userController = require("../../controllers/userController");
const userServices = require("../../services/userServices");
describe("User Controller", () => {
  describe("add content", () => {
    it("should add content", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.addContent = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.addContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("add fields", () => {
    it("should add fields", async () => {
      const req = {
        params: {
          contentId: "1",
        },
        body: {
          newField: "newField",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.addFields = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.addFields(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("update content", () => {
    it("should update content", async () => {
      const req = {
        params: {
          contentId: "1",
        },
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.updateContent = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.updateContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("get contents", () => {
    it("should get contents", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContents = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContents(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("update content field", () => {
    it("should update content field", async () => {
      const req = {
        params: {
          contentId: "1",
        },
        body: {
          field: "field",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.updateContentField = jest
        .fn()
        .mockResolvedValue({ _id: "1" });
      await userController.updateContentField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("delete content field", () => {
    it("should delete content field", async () => {
      const req = {
        params: {
          contentId: "1",
        },
        body: {
          field: "field",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.deleteContentField = jest
        .fn()
        .mockResolvedValue({ _id: "1" });
      await userController.deleteContentField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("get content count", () => {
    it("should get content count", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContentCount = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContentCount(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("get content by id", () => {
    it("should get content by id", async () => {
      const req = {
        params: {
          contentId: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      userServices.getContent = jest.fn().mockResolvedValue({ _id: "1" });
      await userController.getContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ _id: "1" });
    });
  });
});
