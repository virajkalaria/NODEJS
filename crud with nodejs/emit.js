var event=require('events')
var em = new event.EventEmitter()
function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1)
    return diffInMs / (1000 * 60 * 60 * 24)
  }
em.on('myEvent',(data)=>{
    var today = new Date()
    var date1 = new Date(data)
    var date2 = new Date(today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear())
    var d=getDifferenceInDays(date1, date2)
    var ly=d/1460
    var total=d-ly
    var intvalue = Math.floor( total/365 );
    if(intvalue>18)
    console.log('the age of the person is greater than 18 ')
    else
    console.log('the age of the person is not greater than 18 ')
})
em.emit('myEvent',"6-1-2000")
