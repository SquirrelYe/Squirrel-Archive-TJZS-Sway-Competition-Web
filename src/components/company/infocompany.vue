<template>
  <div class="container">
    <!-- Page-Title -->
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">公司组成管理</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>
                          <a @click="selcetAll()" href="javascript:void(0)">#</a>
                        </th>
                        <th>成员ID</th>
                        <th>姓名</th>
                        <th>职务</th>
                        <th>创建时间</th>
                        <th>执行操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
                        <td align="center">
                          <input type="checkbox" v-model="select" :value="item.id" name="jc">
                        </td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.office}}</td>
                        <td>{{item.time}}</td>
                        <td class="actions">
                          <a class="on-default edit-row" @click="editItem(index)">
                            <i class="fa fa-pencil"></i>
                          </a>
                          <a class="on-default remove-row" @click="deleteItem(index)">
                            <i class="fa fa-trash-o"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 公司简介 -->
      <!-- <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Striped rows Table</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Steve</td>
                    <td>Mac Queen</td>
                    <td>@steve</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
    </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "infocompany",
  data() {
    return {
      showItems: "",
      select: [],
      isSelectedAll: false
    };
  },
  mounted() {
    this.mocks();
  },
  methods: {
    mocks() {
      var that = this;
      that.axios
        .post("/company/api", { withCredentials: true })
        .then(res => {
          console.log(res.data);
          that.showItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    editItem(index) {
      console.log(index);
    },
    deleteItem(index) {
      console.log(index);
    },
    selcetAll() {
      //$('[name="jc"]').prop('checked',true);
      if (!this.isSelectedAll) {
        this.showItems.forEach(item => {
          this.select.push(item.id);
          this.isSelectedAll = true;
        });
      } else if (this.isSelectedAll) {
        this.select = [];
        this.isSelectedAll = false;
      }
    }
  }
};
</script>

<style scoped>
</style>