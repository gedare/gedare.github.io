#!/bin/bash

if (($# < 2))
then
  echo "ERROR: Requires two positional arguments"
  exit 1
fi

gs -dPDFA -dBATCH -dNOPAUSE -sColorConversionStrategy=UseDeviceIndependentColor -sDEVICE=pdfwrite -dPDFACompatibilityPolicy=2 -sOutputFile=${2}.pdf ${1}.pdf

