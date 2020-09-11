// class giu cho cho ta biet duoc nguoi choi do la nguoi choi white hay black va quan co dang thuc hien hanh dong
export default class GiuCho {
    constructor(player, iconUrl){
      this.player = player;
      this.style = {backgroundImage: "url('"+iconUrl+"')"};
    }
  }