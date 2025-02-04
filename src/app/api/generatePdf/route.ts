// app/api/generatePdf/route.ts
import { NextResponse } from "next/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function POST(request: Request) {
  const { html } = await request.json();
  const canvas = await html2canvas(html);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size
  const pdfBlob = pdf.output("blob");
  return new NextResponse(pdfBlob, {
    headers: { "Content-Type": "application/pdf" },
  });
}
