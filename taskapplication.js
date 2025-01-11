let tasks=[];
window.onload=function()
{
    const savedTasks=localStorage.getItem('tasks');
    tasks=savedTasks?JSON.parse(savedTasks):[];
    renderTasks();
};
const generateID=()=>'_'+Math.random().toString(36),substr(2,9);
document.getElementById('taskForm').addEventListener('submit',(e)=>)
{
    e.preventDefault();
    const title=document .getElementById('taskTtitle').value ;
    const description=document.getElementById('taskDescription').value ;
    const priority=document.getElementById('taskPriority').value ;
    const task={
        id:generateID(),
        title,description,priority,completed:false,
    };
}