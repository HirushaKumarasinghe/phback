module.exports = Object.freeze({
    ADD_CATEGORIES : 'insert into news_custom_categories(userid,title,industry,keyword) values ((select l.userid from loginstatus l where l.token = $1),$2,$3,$4)',
    VIEW_CATEGORIES : 'select ncc.cateid ,ncc.title, ncc.industry, ncc.keyword from news_custom_categories ncc where ncc.userid = (select lo.userid from loginstatus lo where lo.token = $1)',
    UPDATE_CATEGORIES : 'update news_custom_categories set title = $1,industry =$2,keyword =$3 where userid = (select lo.userid from loginstatus lo where lo.token = $4) and cateid = $5',
    DELETE_CATEGORIES : 'delete from news_custom_categories where userid = (select l.userid from loginstatus l where l.token = $1) and cateid = $2',
    GET_USER_BY_TOKEN : 'select l.userid from loginstatus l where l.token = $1',
});


// postgress-

// ip - 35.200.250.56
// username - postgres
// password - erdt
// database - postgres


// mongodb -
// url - mongodb+srv://user:user@cluster0.mpctz.mongodb.net/phoenix
// username - user
// password - user
// database - phoenix

// mongo for py of node - mongodb+srv://user:user@cluster0.mpctz.mongodb.net/phoenix?retryWrites=true&w=majority