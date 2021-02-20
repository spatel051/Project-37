class Contestant{
    constructor(){
      this.answer = null;
      this.name = null;
      this.index = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCountRef = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }

    update(){
      var contestantIndex = "contestants/constestant" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        answer: this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
}