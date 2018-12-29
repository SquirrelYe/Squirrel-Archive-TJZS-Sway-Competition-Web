module.exports={

    getMoney(company_id){
        let s = `${app.data().globleUrl}/statistic?judge=3&company_id=${company_id}`;
        console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            console.log(res.data);            
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateMoney(){
        let float=Number(this.givePrice)+Number(this.currentStastics.float);
        let total=Number(this.givePrice)+Number(this.currentStastics.total);
        let s = `${app.data().globleUrl}/statistic?judge=2&id=1&float=${float}&total=${total}`;
        console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            console.log(res.data);
            swal("资金信息更新成功!", "参赛者资产信息更新成功", "success");
            this.init()
        })
        .catch(err => {
          console.log(err);
        });
    },
    
}