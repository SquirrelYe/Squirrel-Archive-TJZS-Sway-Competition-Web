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
// 测试公司列表
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
// 测试矿区竞拍
const mcompete=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            star:Random.integer(0,5),
            source_id:Random.integer(1,100),
            reserve:Random.integer(1,100),
            deprelief:Random.integer(1,100),
            repurchase:Random.integer(1,100),
            startprice:Random.integer(1,100),
            price:Random.integer(1,100),
            condition:Random.integer(0,2),
            yearid:Random.integer(1,100),
            company_id:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 测试工业用地竞拍
const icompete=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            model:Random.integer(0,5),
            measure:Random.integer(1,100),
            efficient:Random.integer(1,100),
            repurchase:Random.integer(1,100),
            improve:Random.integer(1,100),
            startprice:Random.integer(1,100),
            price:Random.integer(1,100),
            condition:Random.integer(0,2),
            yearid:Random.integer(1,100),
            company_id:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 测试商业用地竞拍
const ccompete=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            level:Random.integer(0,5),
            brand:Random.integer(1,100),
            increment:Random.integer(1,100),            
            startprice:Random.integer(1,100),
            price:Random.integer(1,100),
            condition:Random.integer(1,100),
            yearid:Random.integer(1,100),
            company_id:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 测试公司竞拍汇总表
const compete=function(){
    let article=[]
    for (let i = 0; i < 20; i++) {
        let s={            
            id:Random.integer(0,10),
            yearid:Random.integer(1,100),
            type:Random.integer(0,2),
            thingid:Random.integer(1,100),
            auction:Random.integer(1,100),
            condition:Random.integer(0,3),
            created_at:Random.datetime(),
            updated_at:Random.datetime(),
            company_id:Random.integer(1,100),
        }
        article.push(s);
    }
    return article;
}
// 测试公司原料库存汇总表
const resource=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            mining_id:Random.integer(1,100),
            source_id:Random.integer(1,100),
            company_id:Random.integer(1,100),
            sum:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime(),
        }
        article.push(s);
    }
    return article;
}
// 测试公司产品库存汇总表
const stock=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            kind:Random.integer(1,100),
            sum:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime(),
            company_id:Random.integer(1,100),
            indusland_id:Random.integer(1,100),
            commerresearch_id:Random.integer(1,100),
        }
        article.push(s);
    }
    return article;
}
// 测试公司产品研发汇总表
const good=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            name:Random.integer(1,100),
            function:Random.integer(1,100),
            introduction:Random.integer(1,100),
            condition:Random.integer(0,3),
            price:Random.integer(1,100),
            maxprice:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime(),
            commerland_id:Random.integer(1,100),

            s1:Random.integer(0,5),
            s2:Random.integer(0,5),
            s3:Random.integer(0,5),
            s4:Random.integer(0,5),
            s5:Random.integer(0,5)
        }
        article.push(s);
    }
    return article;
}
// 测试公司订单列表
const showtransaction=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            yearid:Random.integer(1,100),
            judge:Random.integer(1,100),
            type:Random.integer(1,100),
            kind:Random.integer(0,3),
            price:Random.integer(1,100),
            number:Random.integer(1,100),
            detail:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime(),
            me:Random.integer(1,100),
            other:Random.integer(1,100),
            source_id:Random.integer(1,100),
            commerresearch_id:Random.integer(1,100)
        }
        article.push(s);
    }
    return article;
}
// 测试交易原料
const tranSource=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            mining_id:Random.integer(1,100),
            source_id:Random.integer(1,100),
            company_id:Random.integer(1,100),
            price:Random.integer(1,100),
            sum:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
};
// 测试交易产品
const tranGoods=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            kind:Random.integer(1,100),
            company_id:Random.integer(1,100),
            indusland_id:Random.integer(1,100),
            commerresearch_id:Random.integer(1,100),
            price:Random.integer(1,100),
            sum:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 挖掘机列表
const digger=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            model:Random.integer(1,100),
            price:Random.integer(1,100),
            efficient:Random.integer(1,100),
            deprelief:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 厂房列表
const factory=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            model:Random.integer(1,100),
            measure:Random.integer(1,100),
            includeline:Random.integer(1,100),
            price:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
// 研究所列表
const commer=function(){
    let article=[]
    for (let i = 0; i < 6; i++) {
        let s={            
            id:Random.integer(0,10),
            model:Random.integer(1,100),
            brand:Random.integer(1,100),
            formula:Random.integer(1,100),
            price:Random.integer(1,100),
            conrequire:Random.integer(1,100),
            created_at:Random.datetime(),
            updated_at:Random.datetime()
        }
        article.push(s);
    }
    return article;
}
Mock.mock('/news/api','post',producePlants);
Mock.mock('/company/api','post',produceCompany);
Mock.mock('/companylist/api','post',produceCompanyList);
Mock.mock('/mcompete/api','post',mcompete); //矿区
Mock.mock('/icompete/api','post',icompete); //工业用地
Mock.mock('/ccompete/api','post',ccompete); //商业用地
Mock.mock('/compete/api','post',compete); //公司竞拍表
Mock.mock('/resource/api','post',resource); //公司原料库存汇总表
Mock.mock('/stock/api','post',stock); //公司产品库存汇总表
Mock.mock('/good/api','post',good); //公司产品研发汇总表
Mock.mock('/showtransaction/api','post',showtransaction); // 测试公司订单列表
Mock.mock('/transoource/api','post',tranSource); // 测试交易原料
Mock.mock('/trangoods/api','post',tranGoods); // 测试交易产品
Mock.mock('/digger/api','post',digger); // 测试挖掘机列表
Mock.mock('/factory/api','post',factory); // 测试厂房列表
Mock.mock('/commer/api','post',commer); // 测试研究所列表
