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
      account: {
        Row: {
          created_at: string
          default_currency: string
          id: number
          latest_balance: number
          name: string
          opening_date: string
          starting_balance: number | null
          type: number
        }
        Insert: {
          created_at?: string
          default_currency: string
          id?: number
          latest_balance: number
          name: string
          opening_date?: string
          starting_balance?: number | null
          type: number
        }
        Update: {
          created_at?: string
          default_currency?: string
          id?: number
          latest_balance?: number
          name?: string
          opening_date?: string
          starting_balance?: number | null
          type?: number
        }
        Relationships: [
          {
            foreignKeyName: "account_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "account_type"
            referencedColumns: ["id"]
          },
        ]
      }
      account_type: {
        Row: {
          created_at: string
          id: number
          is_asset_class: boolean | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_asset_class?: boolean | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_asset_class?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      category: {
        Row: {
          budget: string | null
          created_at: string
          group: number | null
          id: number
          is_budgeted: boolean | null
          name: string | null
        }
        Insert: {
          budget?: string | null
          created_at?: string
          group?: number | null
          id?: number
          is_budgeted?: boolean | null
          name?: string | null
        }
        Update: {
          budget?: string | null
          created_at?: string
          group?: number | null
          id?: number
          is_budgeted?: boolean | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "category_group_fkey"
            columns: ["group"]
            isOneToOne: false
            referencedRelation: "category_group"
            referencedColumns: ["id"]
          },
        ]
      }
      category_group: {
        Row: {
          budget: number | null
          budget_type: string | null
          created_at: string
          id: number
          is_budgeted: boolean | null
          is_expense: boolean | null
          name: string | null
        }
        Insert: {
          budget?: number | null
          budget_type?: string | null
          created_at?: string
          id?: number
          is_budgeted?: boolean | null
          is_expense?: boolean | null
          name?: string | null
        }
        Update: {
          budget?: number | null
          budget_type?: string | null
          created_at?: string
          id?: number
          is_budgeted?: boolean | null
          is_expense?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      document: {
        Row: {
          created_at: string | null
          file_path: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      label: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      transaction: {
        Row: {
          account: number
          amount: number
          category: number | null
          created_at: string
          id: number
          is_expense: boolean
          item: string
          label: number | null
          notes: string | null
          txn_date_time: string | null
        }
        Insert: {
          account: number
          amount: number
          category?: number | null
          created_at?: string
          id?: number
          is_expense?: boolean
          item: string
          label?: number | null
          notes?: string | null
          txn_date_time?: string | null
        }
        Update: {
          account?: number
          amount?: number
          category?: number | null
          created_at?: string
          id?: number
          is_expense?: boolean
          item?: string
          label?: number | null
          notes?: string | null
          txn_date_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_account_fkey"
            columns: ["account"]
            isOneToOne: false
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_label_fkey"
            columns: ["label"]
            isOneToOne: false
            referencedRelation: "label"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      category_transaction_count: {
        Row: {
          name: string | null
          transaction_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_category_transaction_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          name: string
          transaction_count: number
        }[]
      }
      get_day_wise_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          txn_date_time: string
          count: number
        }[]
      }
      get_total_amount_by_month: {
        Args: {
          month_param: number
        }
        Returns: number
      }
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
