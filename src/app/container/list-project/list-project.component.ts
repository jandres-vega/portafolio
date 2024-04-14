import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {dataProjects, Project} from "../../utils/dataProjects";

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.css'
})
export class ListProjectComponent {

  listProjects:Project[] = dataProjects

}
