export interface FhirClientOptions {
  fhirServer: string;
  token?: string;
}

export class FhirClient {
  private baseUrl: string;
  private token?: string;

  constructor({ fhirServer, token }: FhirClientOptions) {
    this.baseUrl = fhirServer.replace(/\/$/, '');
    this.token = token;
  }

  async dereference(reference: string): Promise<any> {
    const url = `${this.baseUrl}/${reference}`;
    const headers: Record<string, string> = {
      'Accept': 'application/fhir+json'
    };
    if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`Failed to dereference ${reference}: ${res.statusText}`);
    }
    return res.json();
  }
}
