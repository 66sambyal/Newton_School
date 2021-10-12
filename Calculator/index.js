var a = null;
var b = null;
var op = null;
var result = null;
var count = 0;
var output = document.getElementById("output");
numFun = (id) => {
    let val = document.getElementById(id).value;
    parseFloat(val).toFixed(2);
    if (a == null || op == null) {
        if (a != null) {
            let temp = a + val;
            val = temp;
            a = val;
            result = a;
        }
        else {
            a = val;
            result = a;
        }
        output.value = result;
    }
    else if (op != null) {
        if (b != null) {
            let temp = b + val;
            val = temp;
            b = val;
        }
        else {
            b = val;
        }
        output.value = a + op + b;
    }

}

clearFun = (id) => {
    a = null;
    b = null;
    op = null;
    output.value = 0;
    count=0;
}

sumFun = () => {
    b = null;
    op = '+';
    if (a != null){
        output.value = a + "+";
        count=0;
    }
    else {
        a = 0;
        output.value = a + "+";
    }
}

subFun = () => {
    op = '-';
    b = null;
    if (a != null){
        output.value = a + "-";
        count=0;
    }
    else {
        a = 0;
        output.value = a + "-";
        count=0;
    }
}

mulFun = () => {
    op = '*';
    b = null;
    if (a != null){
        output.value = a + "*";
        count=0;
    }
    else {
        a = 0;
        output.value = a + "*";
        count=0;
    }
}

divFun = () => {
    op = '/';
    b = null;
    if (a != null){
        output.value = a + "/";
        count=0;
    }
    else {
        a = 0;
        output.value = 0 + "/";
        count=0;
    }
}

dotFun = () => {
    if (++count < 2) {
        if (a == null && b == null && op == null) {
            a = "0.";
            output.value = a;
        }
        else if (a != null && b == null && op == null) {
            a += ".";
            output.value = a;
        }
        else if (a != null && b == null && op != null) {
            b = 0;
            b += ".";
            parseFloat(b).toFixed(2);
            output.value = a + op + b;
        }
        else if (a != null && b != null && op != null) {
            b += ".";
            output.value = a + op + b;
        }
    }
}

equalFun = () => {
    if (parseFloat(a) == 0 && parseFloat(b) == 0 && op == '/') {
        result = 0 / 0;
        output.value = parseFloat(result);
    } else if (a != null && a != 0 && b == 0) {
        result = a / b;
        output.value = result;
    }
    else if (a != null && op != null && b != null) {
        switch (op) {
            case '+':
                result = parseFloat(a) + parseFloat(b);
                break;
            case '-':
                result = parseFloat(a) - parseFloat(b);
                break;
            case '/':
                a = parseFloat(a);
                b = parseFloat(b);
                result = a / b;
                result = result.toFixed(2);
                output.value = result;
                break;
            case '*':
                result = parseFloat(a) * parseFloat(b);
                break;
        }

        if (result == NaN)
            output.value = parseFloat(result);
        else
            output.value = parseFloat(result);
        a = result;
        result = 0;
        b = null;
        op = null;
        count=0;
    }
}