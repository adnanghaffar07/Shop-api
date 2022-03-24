import { workflowPage } from './page_objects/WorkflowPage';

export const setTodayDate = () => {
    let d = new Date();
    let dateFormated = ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "-" +
    d.getFullYear() + " 00:00";
    return dateFormated;
}
