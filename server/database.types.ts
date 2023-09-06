export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      account: {
        Row: {
          created_at: string
          default_currency: string | null
          id: number
          latest_balance: number | null
          name: string | null
          opening_date: string | null
          starting_balance: number | null
          type: number | null
        }
        Insert: {
          created_at?: string
          default_currency?: string | null
          id?: number
          latest_balance?: number | null
          name?: string | null
          opening_date?: string | null
          starting_balance?: number | null
          type?: number | null
        }
        Update: {
          created_at?: string
          default_currency?: string | null
          id?: number
          latest_balance?: number | null
          name?: string | null
          opening_date?: string | null
          starting_balance?: number | null
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_type_fkey"
            columns: ["type"]
            referencedRelation: "account_type"
            referencedColumns: ["id"]
          }
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
            referencedRelation: "category_group"
            referencedColumns: ["id"]
          }
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
          account: number | null
          amount: number | null
          category: number | null
          created_at: string
          id: number
          item: string | null
          label: number | null
          notes: string | null
          txn_date_time: string | null
        }
        Insert: {
          account?: number | null
          amount?: number | null
          category?: number | null
          created_at?: string
          id?: number
          item?: string | null
          label?: number | null
          notes?: string | null
          txn_date_time?: string | null
        }
        Update: {
          account?: number | null
          amount?: number | null
          category?: number | null
          created_at?: string
          id?: number
          item?: string | null
          label?: number | null
          notes?: string | null
          txn_date_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_account_fkey"
            columns: ["account"]
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_category_fkey"
            columns: ["category"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_label_fkey"
            columns: ["label"]
            referencedRelation: "label"
            referencedColumns: ["id"]
          }
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
