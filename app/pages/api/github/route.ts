import { useGithubStore } from "@/store/GithubStore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  let json_response = {
    status: "success",
    //result: localStorage.getItem("github_webhook"),
  };
  //localStorage.setItem("github_webhook","false")
  return NextResponse.json(json_response);
}

export async function POST(req:NextRequest) {
  let json_response = {
    status: "success",
    results: "bruh",
  };
  console.log(req)
  //const data=await req.json()
  //const state=useGithubStore.getState()
  //state.setGithubData({data: data.repository.stargazers_count})
  //console.log(data) 
  //localStorage.setItem("github_webhook","true")
  return NextResponse.json(json_response);
}