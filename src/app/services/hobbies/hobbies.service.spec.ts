import { TestBed } from "@angular/core/testing";

import { HobbiesService } from "./hobbies.service";

describe("HobbiesService", () => {
  let service: HobbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbiesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("get hobbies", () => {
    const hobbies = service.hobbies;
    expect(hobbies).toBeDefined();
    expect(hobbies.length).toEqual(6);
  });
});
