var mergeTwoLists = function(list1, list2) {
    let p1=list1;
    let p2=list2;
    let dummmyNode=new ListNode(-1);
    let mergedHead=tail=dummmyNode;
   
//     while(list1.next){
//         list1=list1.next;

//     }
//    list1.next=list2;
//    return head
while(p1 && p2){
    if(p1.val>p2.val){
        tail.next=p2;
        p2=p2.next;
        
    }else{
        tail.next=p1;
        p1=p1.next;
    }
tail=tail.next;
}
tail.next = p1 || p2;
return dummmyNode.next;
};


function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
//const list1 = [1,2,4];

const list1={val:1,next:{val:2,next:{val:4,next:null}}}
const list2={val:1,next:{val:3,next:{val:4,next:null}}}
//const list2 = [1,3,4];

console.log(mergeTwoLists(list1,list2))