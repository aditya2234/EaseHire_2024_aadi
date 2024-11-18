export interface Candidate {
    CANDIDATE_ID:number;
    FIRST_NAME:String;
    LAST_NAME:string;
    PHONE_NO: string;
    EMAIL: string;
    CURRENT_COMPANY:string;
    LAST_WORKING_DAY: number;
    CURRENT_CTC: number;
    EXPECTED_CTC: number;
    CURRENT_LOCATION:string;
    PREFERRED_LOCATION:string 
    TENTATIVE_JOINING_DATE:string;
    GENDER:string;
    PAN_NO:string;
    AADHAR_NO:number;
    REFERRAL_SOURCE:string;
    candidateSkills: CandidateSkill[];
}

  export interface CandidateSkill {
    skillId: number;
    skillName: string;
    skillRate?:number;
  }
  