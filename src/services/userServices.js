const db = require('../../database/models');
const addContent = async(content) => {

    const contents = await db.ContentTypes.create({
        name: content,
        fields:{}
    })
    return contents;
}

const addFields = async(contentId,newfield) => {
    const contents = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    contents.fields[newfield] = "";
    contents.changed('fields',true);
    await contents.save();
    return contents;
}

const getContents = async() => {
    const contents = await db.ContentTypes.findAll();
    return contents;
}

const updateContent = async(contentId,newContent) => {
    const contents = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    contents.name = newContent;
    await contents.save();
    return contents;
}

const updateContentField = async(contentId,changeField)=>{
    console.log(changeField)
    const content = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    delete content.fields[changeField.old];
    content.fields[changeField.new] = "";
    content.changed('fields',true);
    await content.save();
    return content;
}

const deleteContentField = async(contentId,fieldKey) => {
    const contents = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    delete contents.fields[fieldKey];
    contents.changed('fields',true);
    await contents.save();
    return contents;
}

const getFieldCount = async(contentId) => {
    const contents = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    const fieldCount = Object.keys(contents.fields).length;
    return fieldCount;
}

const getContentEntries = async(contentId)=>{
    const entries = await db.Entries.findAll({
        where:{
            contentTypeId:contentId
        }
    })
    return entries;
}
const addContentEntries = async(contentId,entry)=>{
    const newEntry = await db.Entries.create({
        contentTypeId:contentId,
        fields:entry
    })
    return newEntry;
}
const updateContentEntries = async(id,entry)=>{
  const updatedEntry = await db.Entries.findOne({
        where:{
            contentTypeId:id
        }
    })
    updatedEntry.fields = entry;
    updatedEntry.changed('fields',true);
    await updatedEntry.save();
    return updatedEntry;

}

const getContentCount = async() => {
    const contents = await db.ContentTypes.findAll();
    const contentCount = contents.length;
    return contentCount;
}

const getFields = async(contentId) => {
    const contents = await db.ContentTypes.findOne({
        where:{
            id:contentId
        }
    })
    const fields = contents.fields;
    return fields;
}

const getContent = async (params) => {
    const content = await db.ContentTypes.findOne({where:{id:params.id}});
    return content;
}

const deleteEntries = async(entryId)=>{
    const newEntry = await db.Entries.destroy({
        where:{
            id:entryId
        }
    })
    console.log(newEntry);
    return newEntry;
}

const deleteContentByID = async(contentId)=>{
    const newEntry = await db.ContentTypes.destroy({
        where:{
            id:contentId
        }
    })
    console.log(newEntry);
    return newEntry;
}

module.exports = {addContent,addFields,getContents,updateContent,updateContentField,deleteContentField,getFieldCount
,getContentEntries,addContentEntries,updateContentEntries,getContentCount,getFields,getContent,deleteEntries,deleteContentByID};
