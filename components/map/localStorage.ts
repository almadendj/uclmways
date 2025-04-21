export function saveEndNode(endNode: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("endNode", endNode);
  }
}

export function getEndNode(): string | undefined {
  if (typeof window !== "undefined") {
    return localStorage.getItem("endNode") ?? "";
  }
}
