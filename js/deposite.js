
document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositeCall=document.getElementById('amount');
    const deposite=depositeCall.value;
    const newdeposite=parseFloat(deposite)
    const changeDepositeCall=document.getElementById('change-deposite');
    const changeDeposite=changeDepositeCall.innerText;
    const priviosdeposit=parseFloat(changeDeposite)
    const totalDeposite=newdeposite+priviosdeposit;
    changeDepositeCall.innerText=totalDeposite;

    const blanceCall=document.getElementById('blance');
    const blance=blanceCall.innerText
    const newblance=parseFloat(blance)
    const totalBlance=newdeposite+newblance
    blanceCall.innerText=totalBlance
    depositeCall.value= '';
})
 

document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowCall=document.getElementById('inter-Amount');
    const withdrow=withdrowCall.value;
    const newWithdrow=parseFloat(withdrow)
    const changeWithdrowCall=document.getElementById('withdrow');
    const changeWithdrow=changeWithdrowCall.innerText;
    const priviosWithdrow=parseFloat(changeWithdrow)
    const totalWithdrow=newWithdrow+priviosWithdrow;
    changeWithdrowCall.innerText=totalWithdrow;

    const blanceCall=document.getElementById('blance');
    const blance=blanceCall.innerText
    const newblance=parseFloat(blance)
    const totalBlance=newblance-newWithdrow
    blanceCall.innerText=totalBlance
    withdrowCall.value= '';
})
