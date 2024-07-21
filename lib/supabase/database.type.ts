export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendees: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          has_account: boolean | null
          hold_expire_in: string | null
          id: string
          payment_status: string
          status: string
          ticket_code: string | null
          ticket_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          has_account?: boolean | null
          hold_expire_in?: string | null
          id?: string
          payment_status: string
          status: string
          ticket_code?: string | null
          ticket_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          has_account?: boolean | null
          hold_expire_in?: string | null
          id?: string
          payment_status?: string
          status?: string
          ticket_code?: string | null
          ticket_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendees_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendees_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_moderators: {
        Row: {
          created_at: string | null
          event_id: string
          has_accepted: boolean
          id: string
          is_active: boolean
          role_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_id: string
          has_accepted?: boolean
          id?: string
          is_active?: boolean
          role_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_id?: string
          has_accepted?: boolean
          id?: string
          is_active?: boolean
          role_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_moderators_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_moderators_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "event_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_moderators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_roles: {
        Row: {
          created_at: string | null
          event_id: string | null
          headline: string | null
          id: string
          is_active: boolean
          is_general: boolean | null
          name: string
          permissions: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          headline?: string | null
          id?: string
          is_active?: boolean
          is_general?: boolean | null
          name: string
          permissions: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          headline?: string | null
          id?: string
          is_active?: boolean
          is_general?: boolean | null
          name?: string
          permissions?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_roles_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          about: string | null
          agenda: Json | null
          banner: string | null
          capacity: number
          category: string
          created_at: string | null
          end_at: string | null
          event_date: string | null
          event_status: string
          event_type: string
          faq: Json | null
          headline: string
          id: string
          is_published: boolean | null
          location: Json | null
          name: string
          organisation_id: string
          organiser: string
          start_at: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          about?: string | null
          agenda?: Json | null
          banner?: string | null
          capacity: number
          category: string
          created_at?: string | null
          end_at?: string | null
          event_date?: string | null
          event_status?: string
          event_type: string
          faq?: Json | null
          headline: string
          id?: string
          is_published?: boolean | null
          location?: Json | null
          name: string
          organisation_id: string
          organiser: string
          start_at?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          about?: string | null
          agenda?: Json | null
          banner?: string | null
          capacity?: number
          category?: string
          created_at?: string | null
          end_at?: string | null
          event_date?: string | null
          event_status?: string
          event_type?: string
          faq?: Json | null
          headline?: string
          id?: string
          is_published?: boolean | null
          location?: Json | null
          name?: string
          organisation_id?: string
          organiser?: string
          start_at?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_organiser_fkey"
            columns: ["organiser"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      organisation_members: {
        Row: {
          created_at: string | null
          has_accepted: boolean | null
          id: string
          is_active: boolean | null
          organisation_id: string
          role_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          has_accepted?: boolean | null
          id?: string
          is_active?: boolean | null
          organisation_id: string
          role_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          has_accepted?: boolean | null
          id?: string
          is_active?: boolean | null
          organisation_id?: string
          role_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organisation_members_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_members_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "organisation_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organisation_roles: {
        Row: {
          created_at: string | null
          headline: string | null
          id: string
          is_active: boolean
          is_general: boolean | null
          name: string
          organisation_id: string | null
          permissions: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          headline?: string | null
          id?: string
          is_active?: boolean
          is_general?: boolean | null
          name: string
          organisation_id?: string | null
          permissions: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          headline?: string | null
          id?: string
          is_active?: boolean
          is_general?: boolean | null
          name?: string
          organisation_id?: string | null
          permissions?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_roles_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
        ]
      }
      organisations: {
        Row: {
          about: string | null
          avatar_url: string
          category: string
          created_at: string | null
          headline: string | null
          id: string
          is_verified: boolean
          name: string
          owner: string
          updated_at: string | null
        }
        Insert: {
          about?: string | null
          avatar_url: string
          category: string
          created_at?: string | null
          headline?: string | null
          id?: string
          is_verified?: boolean
          name: string
          owner: string
          updated_at?: string | null
        }
        Update: {
          about?: string | null
          avatar_url?: string
          category?: string
          created_at?: string | null
          headline?: string | null
          id?: string
          is_verified?: boolean
          name?: string
          owner?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organisations_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          availability: string | null
          available_tickets: number
          created_at: string | null
          event_id: string
          id: string
          is_active: boolean | null
          name: string
          price: string | null
          ticket_code_prefix: string | null
          ticket_type: string
          total_tickets: number
          updated_at: string | null
          wait_on: string | null
        }
        Insert: {
          availability?: string | null
          available_tickets: number
          created_at?: string | null
          event_id: string
          id?: string
          is_active?: boolean | null
          name: string
          price?: string | null
          ticket_code_prefix?: string | null
          ticket_type: string
          total_tickets: number
          updated_at?: string | null
          wait_on?: string | null
        }
        Update: {
          availability?: string | null
          available_tickets?: number
          created_at?: string | null
          event_id?: string
          id?: string
          is_active?: boolean | null
          name?: string
          price?: string | null
          ticket_code_prefix?: string | null
          ticket_type?: string
          total_tickets?: number
          updated_at?: string | null
          wait_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
