import { Injectable } from "@angular/core";
import { Tool } from "src/app/components/tools/models/tool";
import { default as JSONTools } from "../../../assets/json-data/tools.json";
import { CalculateColorService } from "../calculate-color/calculate-color.service";

@Injectable({
  providedIn: "root",
})
export class ToolsService {
  constructor(private calculateColorService: CalculateColorService) {}
  public getAll(): Tool[] {
    const result: Tool[] = [];

    const list = JSONTools.tools;
    Array.from(list).forEach((tool: any) =>
      result.push(
        new Tool(
          tool.name,
          tool.rating,
          this.calculateColorService.calculateColor(tool.rating)
        )
      )
    );
    return result;
  }
}
