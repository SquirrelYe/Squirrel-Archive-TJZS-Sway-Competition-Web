//import mockjs
const Mock = require('mockjs')
//获取mock.random对象
const Random=Mock.Random; 
//mock一组数据
const producePlants=function(){
    let article=[]
    for (let i = 0; i < 106; i++) {
        let plants={
            plantid:Random.integer(0,200),
            aname:Random.cname(),
            alias:Random.cname(),
            lname:Random.cname(),
            family:Random.cword(1,3),
            genera:Random.cword(1,3),
            specie:Random.cword(1,3),
            morphology:Random.csentence(10,20),
            habit:Random.csentence(10,20),
            purpose:Random.csentence(10,30),

            // pic:Random.dataImage('300x250','mock图片'),
            // name:Random.cname(),
            // date:Random.date()+' '+Random.time()
        }
        article.push(plants);
    }
    return article;
}
//mock一组数据
const produceCompany=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let plants={
            id:Random.integer(0,10),
            name:Random.cname(),
            office:Random.cname(),
            time:Random.datetime()
        }
        article.push(plants);
    }
    return article;
}
const produceCompanyList=function(){
    let article=[]
    for (let i = 0; i < 66; i++) {
        let plants={
            
            plantid:Random.integer(0,200),
            aname:Random.cword(5,8),
            alias:Random.cname(),
            lname:Random.guid(),
            family:Random.cword(1,3),
            genera:Random.integer(1,6),
            specie:'正常',
            morphology:Random.datetime()
        }
        article.push(plants);
    }
    return article;
}

Mock.mock('/news/api','post',producePlants);
Mock.mock('/company/api','post',produceCompany);
Mock.mock('/companylist/api','post',produceCompanyList);