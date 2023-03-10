const UserServices = require("../services/userServices");

const addContent = async (req, res) => {
  try {
    const { content } = req.body;
    console.log(req.body);
    const contents = await UserServices.addContent(content);
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addFields = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { newfield } = req.body;
    const contents = await UserServices.addFields(contentId, newfield);
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getContents = async (req, res) => {
  try {
    const contents = await UserServices.getContents();
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateContent = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { newContent } = req.body;
    const updatedContent = await UserServices.updateContent(
      contentId,
      newContent
    );
    res.status(200).json(updatedContent);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateContentField = async (req, res) => {
  try {
    const { contentId } = req.params;
    const changeField = req.body;
    console.log(changeField);
    const contentType = await UserServices.updateContentField(
      contentId,
      changeField
    );
    res.status(200).json(contentType);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteContentField = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { fieldKey } = req.body;

    const contents = await UserServices.deleteContentField(contentId, fieldKey);
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getFieldCount = async (req, res) => {
  try {
    const { contentId } = req.params;
    const contents = await UserServices.getFieldCount(contentId);
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getContentEntries = async (req, res) => {
  try {
    const { contentId } = req.params;
    const contentTypeEntries = await UserServices.getContentEntries(contentId);
    res.status(200).json(contentTypeEntries);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addContentEntries = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { newEntry } = req.body;
    const contentTypeEntries = await UserServices.addContentEntries(
      contentId,
      newEntry
    );
    res.status(200).json(contentTypeEntries);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateContentEntries = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { newEntry } = req.body;
    const contentTypeEntries = await UserServices.updateContentEntries(
      contentId,
      newEntry
    );
    res.status(200).json(contentTypeEntries);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getContentCount = async (req, res) => {
  try {
    const contents = await UserServices.getContentCount();
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getFields = async (req, res) => {
  try {
    const { contentId } = req.params;
    const contents = await UserServices.getFields(contentId);
    res.status(200).json(contents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getContent = async(req,res)=>{
  try{
      const params = req.params;
      const contents = await UserServices.getContent(params);
      res.status(200).json(contents);
  }catch(error){
      res.status(500).send({message:error.message});
  }
}
module.exports = {
  addContent,
  getContents,
  addFields,
  updateContent,
  updateContentField,
  deleteContentField,
  getFieldCount,
  getContentEntries,
  addContentEntries,
  updateContentEntries,
  getContentCount,
  getFields,
  getContent
};
