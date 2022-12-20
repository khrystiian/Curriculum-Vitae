import { Component, OnInit } from "@angular/core";
import { ToolsService } from "src/app/services/tools/tools.service";
import { Tool } from "./models/tool";

@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.scss"],
})
export class ToolsComponent implements OnInit {
  public tools: Tool[] = [];

  constructor(private toolsService: ToolsService) {}

  ngOnInit(): void {
    this.tools = this.toolsService.getTools();
  }
}
