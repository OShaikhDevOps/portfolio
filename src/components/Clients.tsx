import { Column, Heading, Row, RevealFx, Text } from "@once-ui-system/core";
import { Client } from "@/types";
import styles from "./Clients.module.scss";

interface ClientsProps {
  title: string;
  clients: Client[];
}

export function Clients({ title, clients }: ClientsProps) {
  return (
    <Column fillWidth gap="l" paddingY="l">
      <RevealFx translateY="8" fillWidth horizontal="center">
        <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
          {title}
        </Heading>
      </RevealFx>
      
      <RevealFx translateY="12" delay={0.2} fillWidth>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "2rem",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
          padding: "0 2rem"
        }}>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={styles.clientItem}
              style={{ 
                cursor: client.website ? "pointer" : "default"
              }}
            >
              {client.website ? (
                <a 
                  href={client.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.clientLink}
                >
                  <img
                    src={client.logo}
                    alt={client.alt || client.name}
                    className={styles.clientLogo}
                  />
                </a>
              ) : (
                <img
                  src={client.logo}
                  alt={client.alt || client.name}
                  className={styles.clientLogo}
                />
              )}
            </div>
          ))}
        </div>
      </RevealFx>
    </Column>
  );
}
