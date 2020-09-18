
const utils = {
    // check item have in list or not
    isitemInList(i, list){
       return ((list.indexOf(i) >=0 )? true : false)
    },

    getTurnByPlayer(turn){
        if (turn === "white") return 1
        else if (turn === "black") return 2
      }
}

export default utils