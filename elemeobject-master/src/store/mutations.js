export default {
    cunchu(state,a){
       state.jingwei = a;
    },
    cunchujing(state,a){
        state.jing = a;
     },
     cunchuwei(state,a){
        state.wei = a;
     },
     cunchu(state,a){
        state.jingwei = a;
     },
    getBusiness(state,v){
        state.business = v;
    },
    getfoodMsg(state,v){
        state.foodMsg = v;
    },
    // getName(state, a) {
    //     this.state.username = a;
    //   },
    getimg1(state,b){
        this.state.img = b;
      },
      getlogin(state,b){
        this.state.login = b;
        console.log(b)
      },
      getjingweidu(state,a){
        this.state.jingweidu=a;
        console.log(a)
      },
      getsousuo(state,a){
        this.state.sousuo=a;
      },
      gethongbaolength(state,a){
        this.state.hongbaolength=a;
      },
      getdata(state,a){
        this.state.detail = a;
      },
      getspclass(state,a){
        this.state.spclass = a;
      }
}