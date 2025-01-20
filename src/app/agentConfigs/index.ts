import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import bootCampAgent from "./bootCampAgent"; // Import your custom agents

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  bootCampAgent, // Add your custom agents
};

export const defaultAgentSetKey = "simpleExample";
