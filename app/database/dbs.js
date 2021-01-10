module.exports = Object.freeze({
    LOGIN : 'select u.uid, u.lname, u.fname from users u where u.email = $1 and u.password = $2',
    VIEW_ALL_EMP : 'select * from employee',
    VIEW_MARK_EDU : 'select eu.phd, eu.msc, eu.bsc, eu.certi from eduqualifications eu where eu.eqid = 1',
    UPDATE_MARK_EDU : 'update eduqualifications set phd = $1 , msc = $2 , bsc = $3 , certi = $4 where eqid = 1',
    ADD_PROJECT : 'insert into project (title,description,dir) values ($1,$2,$3)',
    VIEW_PROJECTS : 'select proid,title,description,dir from project',
    ADD_SKILL : 'insert into soft_skills (skill,maxval) values ($1,$2)',
    DELETE_SKILL : 'delete from soft_skills where sid = $1',
    VIEW_SKILL : 'select sid,skill,maxval from soft_skills',
    ADD_KEYDRIVER : 'insert into key_drivers (key_name) values ($1)',
    VIEW_KEYDRIVER : 'select * from key_drivers',
    ADD_TEXT_Q : "insert into questions (key_id, q_type, question) values ($1,'text',$2)",
    ADD_RADIO_Q : "insert into questions (key_id, q_type, question, answers) values ($1,'radio',$2,array['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'])",
    VIEW_Q : "select * from questions",
    
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