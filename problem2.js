const maxQuotaMiniBus = 4;
const delimiter = " ";


//expected input: Int, String
//return string
function countRequiredBus(totalFamilies, memberOfFamilies){
    let totalBus = 0;
    let arrMember = memberOfFamilies.split(delimiter);
    
    if(totalFamilies != arrMember.length){
        return "Input must be equal count of family";
    }

    let totalMemberFamilies = arrMember.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);

    totalBus = Math.ceil(totalMemberFamilies / maxQuotaMiniBus); //round up if value has decimal in it

    return `Minimum bus required is : ${totalBus}`;
}

console.log(countRequiredBus(5, '1 2 4 3 3'));
console.log(countRequiredBus(8, '2 3 4 4 2 1 3 1'));
console.log(countRequiredBus(5, '1 2'));