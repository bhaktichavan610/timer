function createStudentManager()
{
    let students={};
    return{
        addStudent(name,subject,score)
        {
            if(!students[name])
            {
                students[name]={};
            }
           if(subject&&score!==undefined)
           {
            students[name][subject]=score;
           }
        },
       getStudentDetails:function(name)
       {
        if(students[name])
        {
            return{name,subjects:students[name]};
        }
        return"Student Not Found";
       },
        getAverageScore(name)
        {
            if(!students[name])return "Student Not Found";
            {
                let scores=Object.values(students[name]);
                let totalScore=scores.reduce((sum,score)=>sum+score,0);
                return scores.length?totalScore/scores.length:0;
            }
    
        },
        getTopPerformers()
        {
            return Object.keys(students).filter(name=>
            
                this.getAverageScore(name)>85);
                
            
            
        },
        getDifficultSubjects()
        {
            let subjectScores={};
            let studentCount=Object.keys(students).length;
            Object.values(students).forEach(subjects=>{
                Object.entries(subjects).forEach(([subject,score])=>
                {
                    if(!subjectScores[subject])subjectScores[subject]=[];
                    subjectScores[subject].push(score);
                });
            });
            return Object.entries(subjectScores)
            .filter(([subject,scores])=>scores.filter(score=>score<40).length>1)
            .map(([subject])=>subject);
        },
        getStudentWhoFailed()
        {
            return Object.keys(students).filter(name=>
                Object.values(students[name]).some(score=>score<35)
            );
        },
        getSubjectFrequency()
        {
            let subjectFrequency={};
            Object.values(students).forEach(student=>{
              if(student.subjects){
                Object.keys(student.subject).forEach(subject=>{
                  
                    subjectFrequency[subject]=(subjectFrequency[subject]||0)+1;
                });
              }
            });
            return subjectFrequency;
        }
    };

    }
const manager=createStudentManager();
manager.addStudent("alice");
manager.addStudent("bob");
manager.addStudent("alice","math",90);
manager.addStudent("alice","science",80);
manager.addStudent("bob","math",30);
manager.addStudent("bob","science",50);
console.log("alice details:",manager.getStudentDetails("alice"));
console.log("bob details:",manager.getStudentDetails("bob"));
console.log("alice average score:",manager.getAverageScore("alice"));
console.log("bob average score:",manager.getAverageScore("bob"));
console.log("top performence:",manager.getTopPerformers());
console.log("difficult subjects:",manager.getDifficultSubjects());
console.log("students who failed:",manager.getStudentWhoFailed());
console.log("subject frequency:",manager.getSubjectFrequency());
