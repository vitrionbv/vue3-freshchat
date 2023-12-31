// freshchat.d.ts

export interface FreshChatSettings {
    onInit?: () => void;
    // Add more properties here if needed
}
export interface FreshChatConfig {
    config?: {
        eagerLoad?:boolean
    }
    // Add more properties here if needed
}

export interface FreshChatWidget {
    destroy?: () => void;
    setExternalId: (externalId: string) => void;
    user: {
        setFirstName: (firstName: string) => void;
        setLastName: (firstName: string) => void;
        setEmail: (email: string) => void;
        setProperties: (properties: Record<string, any>) => void;
        // Add more methods/properties here if needed
    };
    // Add more methods/properties here if needed
}

export interface FreshWindow extends Window {
    fcSettings: FreshChatSettings;
    fcWidget: FreshChatWidget;
    fcWidgetMessengerConfig:FreshChatConfig;
}
