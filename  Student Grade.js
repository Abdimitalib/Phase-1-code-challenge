function Grade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    }else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 49 && marks < 60){
        return 'C';
    
    }else if (marks >= 40 && marks <= 49) {
        return 'D';
    }else if (marks < 40 && marks >= 0) {
        return 'E';
    } else {
        console.log("input marks between 0 and 100");
    }
} 