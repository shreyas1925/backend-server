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
    const newEntry = await db.Entries.update({
        fields:entry
    },{
        where:{
            contentTypeId:id
        }
    })
    return newEntry;
}

module.exports = {addContent,addFields,getContents,updateContent,updateContentField,deleteContentField,getFieldCount
,getContentEntries,addContentEntries,updateContentEntries};
