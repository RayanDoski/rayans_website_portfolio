'use client'
import React, { useEffect, useState } from 'react';

function Divider() {
  return (
    <div className={`bg-[var(--color-primary-bg)] py-12 transition-opacity duration-1000 ease-out`}>
      <div className="mx-auto max-w-lg lg:max-w-xl xl:max-w-3xl h-1 rounded-full
                        bg-gradient-to-r from-transparent via-[var(--color-accent-blue)] to-transparent
                        divider-soft-shadow">
      </div>
    </div>
  );
}

export default Divider;