"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SavedTemplate() {
  const [savedConfigs, setSavedConfigs] = useState("");

  useEffect(() => {
    const savedConfigsStr = localStorage.getItem("graphConfigs");
    console.log(savedConfigsStr ? JSON.parse(savedConfigsStr) : [])
    setSavedConfigs(savedConfigsStr ? JSON.parse(savedConfigsStr) : []);
  }, []);

  // When user submits the form, save the favorite number to the local storage

  return (
    <div>
      <h2>Saved Templates</h2>
      <div className="template-cards">
        {savedConfigs && savedConfigs.map((config) => (
          <div key={config.id} className="template-card">
            <h3>{config.id}</h3>
            <Link
              href={{
                pathname: '/',
                query: { configId: config.id } // Pass configId as a query parameter
              }}
            >Load Template</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
