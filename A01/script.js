let nums = prompt('Enter 1 number').split(' '),
    b = +nums[0],
    sum = 0;

if((b <= 0) || (b >= 100)){
    alert('araswori Sualedi');
}else{
    for(var d = 0; d<b; d=d+2){
        sum += d;
    }

    alert(sum);
}
