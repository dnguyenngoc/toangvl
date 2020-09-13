
  /**
   * Thong tin nguoi choi 1 or 2 va lien ket hinh anh quan co
   * @param  {dict} player  
   * @param  {string} iconUrl 
   * @return {[array]}      
   */

  export default class Piece {
    constructor(player, iconUrl){
      this.player = player;
      this.style = {backgroundImage: "url('"+iconUrl+"')"};
      this.empty = null;
    }
  }