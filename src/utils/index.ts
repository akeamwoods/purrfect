function toCamel(s: string): string {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

function isObject(obj: unknown): obj is Record<string, unknown> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    !(obj instanceof Array) &&
    !(obj instanceof Date)
  );
}

// This code was found online, simply used to transform daata to camelCase properties
export function keysToCamel<T>(obj: T): T {
  if (isObject(obj)) {
    const newObj: Record<string, unknown> = {};
    Object.keys(obj).forEach((key) => {
      newObj[toCamel(key)] = keysToCamel((obj as Record<string, unknown>)[key]);
    });
    return newObj as T;
  } else if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item)) as unknown as T;
  }
  return obj;
}
