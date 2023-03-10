const userServices = require("../../services/userServices");
const { ContentTypes, Entries } = require("../../../database/models");

describe("User Services", () => {
  describe("POST /addContent", () => {
    it("should add content", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(ContentTypes, "create").mockResolvedValue(mockResult);
      const result = await userServices.addContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /addFields", () => {
    it("should add fields", async () => {
      const mockResult = {
        newField: "test",
      };
      jest.spyOn(Entries, "create").mockResolvedValue(mockResult);
      const result = await userServices.addFields(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /updateContent", () => {
    it("should update content", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(ContentTypes, "update").mockResolvedValue(mockResult);
      const result = await userServices.updateContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /deleteContent", () => {
    it("should delete content", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(ContentTypes, "destroy").mockResolvedValue(mockResult);
      const result = await userServices.deleteContentByID(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /deleteFields", () => {
    it("should delete fields", async () => {
      const mockResult = {
        newField: "test",
      };
      jest.spyOn(Entries, "destroy").mockResolvedValue(mockResult);
      const result = await userServices.deleteContentField(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /deleteEntry", () => {
    it("should delete entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "destroy").mockResolvedValue(mockResult);
      const result = await userServices.deleteContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /updateEntry", () => {
    it("should update entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "update").mockResolvedValue(mockResult);
      const result = await userServices.updateEntry(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /addEntry", () => {
    it("should add entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "create").mockResolvedValue(mockResult);
      const result = await userServices.addEntry(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /getEntries", () => {
    it("should get entries", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "findAll").mockResolvedValue(mockResult);
      const result = await userServices.getEntries(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /getContents", () => {
    it("should get contents", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(ContentTypes, "findAll").mockResolvedValue(mockResult);
      const result = await userServices.getContents(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /getFields", () => {
    it("should get fields", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "findAll").mockResolvedValue(mockResult);
      const result = await userServices.getFields(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
});
