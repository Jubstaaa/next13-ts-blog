"use client";

import config from "../../../../sanity.config";
import { NextStudioLoading } from "next-sanity/studio/loading";

import React from "react";

function Loading() {
  return <NextStudioLoading config={config} />;
}

export default Loading;
