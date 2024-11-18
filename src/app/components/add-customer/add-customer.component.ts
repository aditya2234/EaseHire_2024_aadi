import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill-management.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

interface Skill {
  skill_id: string;
  rating: string;
}

interface Position {
  dateOfJoin: string;
  grade: string;
  site: string;
  location: string;
  subconAllowed: string;
  billingRate: string;
  jd: string;
  rrNo: string;
  rrType: string;
  skills: Skill[];
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  allProjectsByCustomer:any[]=[];
  filteredProjects: any[]=[];
  allSKill: any;
  filteredCustomerData: Customer[] = [];
  allCustomers: Customer[] = [];
  allSkillsMap: Map<number, string> = new Map();
  currentSkillList: Set<string> = new Set();
  currentStep = 0;
  steps = [
    'Customer & Project Info',
    'Positions & Skills Details',
    'Review & Submit',
  ];
  formData = {
    customer_id:-1,
    customerName: '',
    project_id:-1,  
    projectName: '',
    positions: [
      {
        dateOfJoin: '',
        grade: '',
        site: '',
        location: '',
        subconAllowed: '',
        billingRate: '',
        jd: '',
        rrNo: '',
        rrType: '',
        skills: [] as Skill[],
      },
    ] as Position[],
  };

  constructor(
    private skillService: SkillService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.loadSkillsDropdown();
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      this.allCustomers = data;
      // this.filteredCustomerData=this.allCustomers
    });
  }

  filterData(searchTerm: string) {
    if (searchTerm) {
      this.filteredCustomerData = this.allCustomers.filter((customer) =>
        customer.CUSTOMER_NAME.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredCustomerData = [];
    }
  }

  selectCustomer(customer: Customer) {
    this.formData.customerName = customer.CUSTOMER_NAME;
    this.formData.customer_id = customer.CUSTOMER_ID;
    this.filteredCustomerData = [];
    this.getProjectsByCustomer(1);
  }

  loadSkillsDropdown() {
    this.skillService.getSkills().subscribe((data) => {
      this.allSKill = data.items;
      this.allSKill.forEach((data: any) => {
        this.allSkillsMap.set(data.skill_id, data.skill_name);
      });
    });
  }

  skillNameById(skill: number) {
    return this.allSkillsMap.get(skill);
  }

  addToTempSkill(event: Event, positionIndex: number) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    if (!this.currentSkillList.has(selectedValue)) {
      this.currentSkillList.add(selectedValue);
      this.formData.positions[positionIndex].skills.push({
        skill_id: selectedValue,
        rating: '',
      });
    }
  }

  removeValue(skillId: string, positionIndex: number): void {
    this.currentSkillList.delete(skillId);
    this.formData.positions[positionIndex].skills = this.formData.positions[
      positionIndex
    ].skills.filter((skill) => skill.skill_id !== skillId);
  }

  patchSkillToJSON(positionIndex: number) {
    // This method can be used to save skills to the backend if needed
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  removePosition(index: number) {
    this.formData.positions.splice(index, 1);
  }

  addPosition() {
    this.currentSkillList.clear();
    this.formData.positions.push({
      dateOfJoin: '',
      grade: '',
      site: '',
      location: '',
      subconAllowed: '',
      billingRate: '',
      jd: '',
      rrNo: '',
      rrType: '',
      skills: [],
    });
  }



  getProjectsByCustomer(customer_id:number){
    this.allProjectsByCustomer=this.customerService.getProjectsByCustomer(customer_id).projectArray
    console.log(this.allProjectsByCustomer)
  }

  filterProjects(searchTerm: string) {
    this.filteredProjects=this.allProjectsByCustomer;
    console.log("filter projects", this.filteredProjects)
  }

  selectProject(project: any) {
    this.formData.projectName = project.name;
    this.formData.project_id = project.id;
    this.filteredProjects = [];
  }
}
