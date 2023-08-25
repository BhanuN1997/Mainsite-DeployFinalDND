"use client";
import { getgithubdata } from "@/integrations/triggers/github/server";

export function githubCronJob() {
  async function getData() {
      const response = await getgithubdata();
      console.log(response);
  }
  setInterval(getData, 12000);
}
