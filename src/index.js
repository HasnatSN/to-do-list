import {InboxSystem} from "./inbox_system";
import {Project} from "./nav";
import {Tasks} from "./tasks";

let inboxSystem = new InboxSystem;
let projectClass = new Project;
let tasksClass = new Tasks;

projectClass.addProjectButtonToNav();
tasksClass.addTask();
inboxSystem.addEventListenerToInboxes();