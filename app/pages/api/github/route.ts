import { NextResponse } from "next/server";

export async function GET(req) {
  let json_response = {
    status: "success",
    result: localStorage.getItem("github_webhook"),
  };
  localStorage.setItem("github_webhook","false")
  return NextResponse.json(json_response);
}

export async function POST(req) {
  let json_response = {
    status: "success",
    results: "bruh",
  };
  localStorage.setItem("github_webhook","true")
  return NextResponse.json(json_response);
}